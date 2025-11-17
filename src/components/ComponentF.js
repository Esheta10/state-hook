import React from "react"
import { UserContext, ChannelContext } from "../App";

function ComponentF(){
    return (
        <div>
           <UserContext.Consumer>
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
           </UserContext.Consumer>
        </div>
    )
}

export default ComponentF;