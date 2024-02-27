function Card() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card text-center bg-primary">
                    <div class="card-body">
                    <h5 class="card-title">Card 01</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-center bg-danger">
                    <div class="card-body">
                    <h5 class="card-title">Card 02</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-center bg-success">
                    <div class="card-body">
                    <h5 class="card-title">Card 03</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    ); // Code from Bootstrap
}

export default Card;