import "../header-styles/header.css";

export let HeaderComp = () => {
    return (
      
        <header className="main-header">
            <img className="headerimage logo" src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="hotel images" />
            <img className="headerimage profile" src={process.env.PUBLIC_URL + '/assets/images/01.jpg'} alt="hotel images" />

    
        </header>
      
    );
  };

