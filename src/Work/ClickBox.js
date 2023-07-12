import React from 'react'

export default function ClickBox() {

    var abc = () => {
        var pro = 50;
        console.log("now click")
        if (pro >= 50) {
            console.log("win")
        } else {
            console.log("lose")
        }
    }

    return (
        <div>
            <button onClick={abc}>click </button>
            <div class="ui labeled button" tabindex="0">
                <div class="ui red button">
                    <i class="heart icon"></i> Like
                </div>
                <a class="ui basic red left pointing label">
                    1,048
                </a>
            </div>
            <div class="ui labeled button" tabindex="0">
                <div class="ui basic blue button">
                    <i class="fork icon"></i> Forks
                </div>
                <a class="ui basic left pointing blue label">
                    1,048
                </a>
            </div>
        </div>
    )
}
