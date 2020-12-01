import { useEffect, useState } from "react"
import { db } from "../config/firebase"

export default function contact() {

    const [contacts, setContacts] = useState([])

    console.log(contacts)

    useEffect(() => {

        db.collection('hydroContacts').onSnapshot(snap => {
            setContacts(snap.docs.map(doc => (doc.data())))
        })

    }, [])

    return (
        <div>
            <h1>Hello Contact page</h1>
            {
                contacts ?
                    contacts.map(person => (
                        <li key={person.email}>{person.name}</li>
                    )) : null
            }
        </div>
    )
}
