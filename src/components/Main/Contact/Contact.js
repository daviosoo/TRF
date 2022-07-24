function Contact()
{

    return(
        <div className="my-5 row align-items-center justify-content-center">

            <div className="col-6 text-start border p-5 my-5">
                <h1>Contact</h1>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </form>
            </div>

            <div className="col-3 my-5 infoContainer">

                <h6>HEADQUATERS</h6>
                <p>Emperatriz 604 C, Centrika Victoria</p>
                <p>Monterrey, Nuevo León</p>
                <p>México</p>
                <p>CP 64520</p>

                <h6>EMAIL</h6>
                <a href="mailto:hello@therunningfox">hello@therunningfox</a>

                <h6>PHONE</h6>
                <p>+52 811 628 8763</p>


            </div>
        </div>
    )

}

export default Contact