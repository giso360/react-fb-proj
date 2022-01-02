import randomInteger from 'random-int'
import React, { useEffect, useState } from 'react'
import FriendItem from './FriendItem'
import FriendSuggestions from './FriendSuggestions'

export default function ThirdColumn(props) {

    const [friends, setFriends] = useState(
        [
            "Harvard University",
            "Lykeio Gravas",
            "Texas University",
            "Deree College",
            "Cranfield University",
            "Bar: O batman!!!",
            "Bill Gates",
            "Aragorn",
            "KY Kipselis",
            "Singularity University",
            "TEDxATHENS"
        ]
    )

    const [initialFriends, setInitialFriends] = useState([])

    const [clicked, setClicked] = useState(false)

    const removeDuplicates = (arrayIn) => {
        let res = []
        let setIn = new Set(arrayIn)
        setIn.forEach(e => res.push(e))
        return res
    }

    useEffect(() => {
        let randomInitialFriends = []
        let randomNums = []
        for (let index = 0; ; index++) {
            if (index > 2) {
                break
            }
            randomNums.push(randomInteger(friends.length - 1))
        }
        randomNums.forEach(rn => randomInitialFriends.push(friends[rn]))
        setInitialFriends(
            [...removeDuplicates(randomInitialFriends)]
        )
    }, [])

    const items = initialFriends.map((fr, i) => {
        return (
            <>
                <FriendItem friendName={fr} key={i} />
            </>
        )
    })

    const handleNewFriendAdded = () => {

    }

    return (
        <div className="col-md-3 third-column-container">

            <div className="panel panel-default">
                <div className="panel-body">
                    <h4>Friends</h4>
                    <ul>

                        { items }

                    </ul>

                    <button className='btn btn-primary' onClick={(e) => setClicked(true)}>Add <b><u>New</u></b> Friend</button>

                    {clicked ?
                        <>
                            <FriendSuggestions handleNewFriendAdded={handleNewFriendAdded} frs={friends.filter(f => !initialFriends.includes(f))}  />
                            <button className='btn btn-info' onClick={(e) => {
                                if (e.target.previousElementSibling.firstChild.value) {
                                    setInitialFriends([
                                        ...initialFriends, e.target.previousElementSibling.firstChild.value
                                    ])
                                }
                                setClicked(false)
                            }}>
                                ok
                            </button>
                            <button className='btn btn-warning' onClick={(e) => setClicked(false)}>Cancel</button>
                        </>
                        : ''
                    }
                </div> 
            </div>

        </div>
    )
}
