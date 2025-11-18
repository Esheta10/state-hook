import React, { useContext } from "react"
import { UserContext, ChannelContext } from "../App";
import {CountContext} from '../App'

function ComponentF(){
    const countContext = useContext(CountContext)
    return (
        <div>
           {/* <UserContext.Consumer>
            {
                user => (
                    <ChannelContext.Consumer>
                        {
                            channel => (
                                <div>
                                    User Context value: {user}
                                    <br/>
                                    Channel Context value: {channel}
                                </div>
                            )
                        }
                    </ChannelContext.Consumer>
                )
            }
           </UserContext.Consumer> */}

            ComponentF
            <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
            <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
            <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
        </div>
    )
}

export default ComponentF;