import './forms.css';

const switcher = (e) => {
    e.preventDefault();
    let card1 = document.querySelector('.card1');
    let card2 = document.querySelector('.card2');
    card2.style.scale = 0;
    card1.style.scale = 1;
};

const switcher2 = (e) => {
    e.preventDefault();
    let card1 = document.querySelector('.card1');
    let card2 = document.querySelector('.card2');
    card2.style.scale = 1;
    card1.style.scale = 0;
};

const Form = () => {
    return (
        <div className="algeria">
            <div className="bamako"></div>
            <div className="isiolo flex relative">
                <div className="card1 absolute">
                    <div className="relative me">
                        <h3>Create<br/> Account</h3>
                        <form className="flex flex2 absolute" method="post" action="http://localhost:4500/addUser">
                            <input type="text" placeholder="Name" name="name" id="name" required/>
                            <input type="email" placeholder="Email" name="email" id="mail" required/>
                            <input type="password" placeholder="Password" name="password" id="password" required/>
                            <section className="flex flex2">
                                <button type="submit" className="signUp button">
                                    Sign up
                                    <span className="arrow">&rarr;</span>
                                </button>
                                <button 
                                    className="button"
                                    onClick={e => switcher2(e)}
                                >
                                    Sign in
                                </button>
                            </section>
                        </form>
                    </div>
                </div>
                
                <div className="card2 absolute">
                    <div className="relative">
                        <h3>Welcome<br/> Back</h3>
                        <form className="flex flex2 absolute" method="post" action="http://localhost:4500/authUser">
                            <input type="email" placeholder="Email" name="email" required/>
                            <input type="password" placeholder="Password" name="passw" required/>
                            <section className="flex flex2">
                                <button type="submit" className="signUp button">
                                    Sign in 
                                    <span className="arrow">&rarr;</span>
                                </button>
                                <div className="relative flex flex2">
                                    <button 
                                        className="button"
                                        onClick={e => switcher(e)}
                                    >
                                        Sign up
                                    </button>
                                    <a href="#" className="absolute">forgot password</a>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
