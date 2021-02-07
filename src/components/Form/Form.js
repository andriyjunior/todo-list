const Form = props => {
    return (
            <form onSubmit= {e => props.submit(e)} className='form-wrapper'>
                <input required className={'form-input'} onChange={(value) => props.getValue(value.target.value)}></input>
                <button className={'btn-add'}>Додати завдання</button>
            </form>
    )
}
export default Form;