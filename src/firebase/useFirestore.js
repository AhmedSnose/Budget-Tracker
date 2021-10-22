import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from './firebase';

export const useFirestore = () => {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
   const unsubscribe = onSnapshot(
        collection(db,'Items') , orderBy("date") , 
        (snapshot) =>{
            const Items = snapshot.docs.map(doc=>{
                return {...doc.data() , id:doc.id}
            })
            const budget = snapshot.docs.map(doc=>{
                return doc.data().amount
            })
            setItems(Items)
            setBudget(
                budget.length > 0 && budget.reduce((acc, curr) => acc + curr),
                0
              );
          })


         return unsubscribe 
    }, [db]);


    const addItem = async (item , amount)=>{
        await addDoc(collection(db , 'Items') , {
            ...item,
            amount
        })
    }

    const deleteItem = async (id)=>{
      await  deleteDoc(doc(db, "Items", id))
    }
 
  return { items , addItem, deleteItem , budget};
};