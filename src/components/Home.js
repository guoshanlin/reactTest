import React from 'react';
import  './css/Home.css';

const  aaa = "name"
const  aaa1 = "name1"
const  aaa2 = "name2"
const  aaa3= "name3"
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title" onClick={this.clickMsg}>homePage</h1>
                <div className="content">
                    这是一个点击未绑定点击的地方
                    <hr />
                    <div>
                        {this.data().msg}
                    </div>
                     <hr />
                         <div>
                             {aaa}
                         </div>
                    <hr />
                    <div>
                        {aaa1}
                    </div>
                    <hr />
                    <div>
                        {aaa2}
                    </div>
                    <hr />
                    <div>
                        {aaa3}
                    </div>
                </div>
            </div>
        );
    }
    data () {
        return {
            msg:"这是一个数据data"
        }
    }
    clickMsg () {
        console.log("执行了点击事件。。。")
    }
}

export default Home;