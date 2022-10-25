import React from 'react';
import { ColorConsumer } from './Color';

const colors = ['red','orange','yellow','green','blue','indigo','violet'];

const SelectColors = () => {
    return (
        <div>
            <ColorConsumer>
                {({actions})=>(
                    <div style={{display:'flex'}}>
                        {colors.map(color=>(
                            <div
                                key = {color}
                                style = {{
                                    background:color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer',
                                    margin: '10px 5px 0 0',
                                }}
                                onClick={()=>actions.setColor(color)} // 왼쪽버튼클릭시
                                onContextMenu={(e) => { // 오른쪽버튼클릭시
                                    e.preventDefault();
                                    actions.setPostcolor(color)
                                }
                                }
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>

        </div>
    )
}

export default SelectColors
