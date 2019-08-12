import React from 'react';
import style from './Form.module.scss';
import {Field, Fields , reduxForm} from 'redux-form';
import connect from 'react-redux/es/connect/connect';
import validate from '../../../../../validations/formValidate';

const renderTwoFields = (field1,field2,otherProps) => {
   console.log(field1,field2,otherProps);
   let firstFieldColor="white";
   if ((field1.meta.touched && field1.meta.error)){firstFieldColor="red";}
   else
   if(field1.meta.touched ){firstFieldColor="green";}
    let secondFieldColor="white";
    if ((field2.meta.touched && field2.meta.error)){secondFieldColor="red";}
    else
    if(field2.meta.touched ){secondFieldColor="green";}

    return  <div className={style.displayTwoFields}>
        <div className={style.Row}>
            <div className={style.Field} >
                <input style={{border:"2px solid "+firstFieldColor}} {...field1.input} type={otherProps[0].type} placeholder={otherProps[0].label} autoComplete="off"/>

            </div>
            <div className={style.Field}>
                <input style={{border:"2px solid "+secondFieldColor}} {...field2.input} type={otherProps[1].type} placeholder={otherProps[1].label} autoComplete="off"/>

            </div>
        </div>
        {((field1.meta.touched && field1.meta.error)&&(field2.meta.active))&& <div className={style.errorContainer}>{
            field1.meta.error
        }
        </div>}
        {((field2.meta.touched && field2.meta.error)&&(field1.meta.active))&& <div className={style.errorContainer}>{
            field2.meta.error
        }</div>}
        {((!field1.meta.active)&&(!field2.meta.active)&&( field1.meta.error || field2.meta.error)&&( field1.meta.visited || field2.meta.visited))&& <div className={style.errorContainer}>{
            field1.meta.error || field2.meta.error
        }
        </div>}
    </div>


};

const renderFields = (fields) => {
    return <>
        {renderTwoFields(fields.firstName,fields.lastName,[fields.otherProps[0],fields.otherProps[1]])}
        {renderTwoFields(fields.displayName,fields.email,[fields.otherProps[2],fields.otherProps[3]])}
        {renderTwoFields(fields.password,fields.passwordConfirmation,[fields.otherProps[4],fields.otherProps[5]])}
        </>
};

function Form(props) {
    const {handleSubmit, submitting} = props;
    return (

        <form onSubmit={handleSubmit(props.submit)}>
            <Fields names={['firstName','lastName','displayName','email','password','passwordConfirmation']}
                    otherProps={[{type:"text",label:"First name"},{type:"text",label:"Last name"},{type:"text",label:"Display Name"},{type:"text",label:"Email Address"},{type:"password",label:"Password"},{type:"password",label:"Password Confirmation"}]}
                    component={renderFields}/>
            <div className={style.Row}>
                <div className={style.insideRow}>
                    <span className={style.miniElem}><Field name="role" component="input" type="radio"
                                                            id={'check1'} value={"Buyer"}/> </span>
                    <span>
           <div className={style.textBefore}>
             Join As a Buyer
           </div><div className={style.textAfter}>
             I am looking for a Name, Logo or Tagline for my business, brand or product.
           </div>
           </span>
                </div>
            </div>
            <div className={style.Row}>
                <div className={style.insideRow}>
                    <span className={style.miniElem}><Field name="role" component="input" type="radio"
                                                            id={'check2'} value={"Creative"}/> </span>

                    <span><div className={style.textBefore}>
             Join As a Creative
           </div><div className={style.textAfter}>
             I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.
           </div> </span>
                </div>
            </div>
            <div className={style.Row}>
           <span className={style.RememberMe}>
             <div className={style.flexBox}>
               <span style={{width: '24px', height: '13px'}}>
                 <Field name="RememberMe" component="input" type="checkbox" id={'check'}/>
                 </span>
                <span
                    className={style.checkbox}> Allow Squadhelp to send marketing/promotional offers from time to time</span>
             </div>
           </span>

            </div>
            <div className={style.Row}>
                <button className={style.create}
                        type="submit" disabled={submitting}>Create account
                </button>
            </div>
            <div className={style.Row}>
                <div className={style.underCreate}>
                    <p>
                        By clicking this button, you agree to our <a className={style.terms}
                                                                     href="https://www.squadhelp.com/Terms&amp;Conditions">Terms
                        of Service</a>.</p>
                </div>
            </div>
            <div className={style.Row} style={{marginTop: '10px'}}>
                <button className={style.FieldSocial} type="submit"><span className="fab fa-facebook-f"/> Sign in with
                    Facebook
                </button>
            </div>

            <div className={style.Row} style={{marginTop: '10px'}}>
                <button className={style.FieldSocial} style={{background: '#dd4b39', borderColor: '#dd4b39'}}
                        type="submit">
                    <span className="fab fa-google"/> Sign in with Google
                </button>
            </div>
        </form>
    );
}

Form = reduxForm({
    form: 'register',
    validate,
})(Form);

const mapStateToProps = (state) => {
    return {
        state,
        fromStore: state.userReducers.data,
    };
};


export default connect(mapStateToProps)(Form);


