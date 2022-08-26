const Notification = (props) => {
  const { imageUrl, text, className } = props
  return (
    <div className={`${className} item`}>
      <img src={imageUrl} className='icon' />
      <p>{text} </p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='title'>Notifications</h1>
    <div className='item-container'>
      <Notification
        imageUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        text='Information Message'
        className='information'
      />
      <Notification
        imageUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        text='Success Message'
        className='success'
      />
      <Notification
        imageUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        text='Warning Message'
        className='warning'
      />
      <Notification
        imageUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        text='Error Message'
        className='error'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
