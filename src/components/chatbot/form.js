import React,{Component} from "react";
import ChatBot from 'react-simple-chatbot'

class Form extends Component {
    render(){
        return(
            <ChatBot
            steps={[
                {
                    id:'1',
                    message:'Welocome to Student Employment App! what is your name?',
                    trigger:'name',
                },
                {
                    id:'name',
                    user:true,
                    trigger:'3',
                },
                {
                    id:'3',
                    message:'Hi {previousValue}! How may I help you?',
                    trigger:'help',
                },
                {
                    id:'help',
                    options:[
                        {value:'company',label:'Regarding Company',trigger:'5'},
                        {value:'Registration',label:'Regarding Registration',trigger:'6'},
                    ],
                },
                {
                    id:'5',
                    options:[
                        {value:'info',label:'Regarding Company information',trigger:'7'},
                        {value:'Previ',label:'Regarding Login',trigger:'8'},
                    ],
                },
                {
                    id:'6',
                    message:'You need to first Login your account using proper credentials if not found register as a new user.',
                    trigger:'9'
                },
                {
                    id:'7',
                    message:'This is XYZ company an Indian MNC located at Pune',
                    trigger:'9',
                },
                {
                    id:'8',
                    message:'Register yourself by adding your information and then login using proper credentials',
                    trigger:'9'
                },
                {
                    id:'9',
                    message:'Any other help you need',
                    trigger:'last',
                },
                {
                    id:'last',
                    options:[
                        {value:'y',label:'Yes',trigger:'help'},
                        {value:'n',label:'No',trigger:'end'},
                    ],
                },
                {
                    id:'end',
                    message:'Hope your problem is solved. Thank you for visiting Student-Employment App!',
                    end:true,
                },
            ]} 
            />
        );
    }
}

export default Form;