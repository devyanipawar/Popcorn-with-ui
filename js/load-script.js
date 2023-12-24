function loadContent(){

    // load movie form database
    axios.get(`http://localhost:3000/movies`).then((response)=>{

        var movieData = '';

        response.data.forEach(element => {
            movieData += `<li>
            <div class="movie-card">

              <a href="movie-details.html">
                <figure class="card-banner">
                  <img src="${element.image}" alt="The Northman movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a href="movie-details.html">
                  <h3 class="card-title">${element.title}</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">HD</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT137M">137 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>8.5</data>
                </div>
              </div>

              <div class="row mt-4">
                  <div class="col-lg-12">
                    <button class="btn favBtn">Add to favorite</button>
                  </div>
                </div>

            </div>
          </li>`
        });

        $("#movieList").html(movieData);

    }).catch(err=>{
        console.log("something went wrotn in movie loading", err)
    })

    // load tv show form database
    axios.get(`http://localhost:3000/tvShows`).then((response)=>{

        var showData = '';

        response.data.forEach(element => {
            showData += `<li>
            <div class="movie-card">

              <a href="movie-details.html">
                <figure class="card-banner">
                  <img src="${element.image}" alt="The Northman movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a href="movie-details.html">
                  <h3 class="card-title">${element.title}</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">HD</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT137M">137 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>8.5</data>
                </div>
              </div>

              <div class="row mt-4">
                  <div class="col-lg-12">
                    <button class="btn favBtn">Add to favorite</button>
                  </div>
                </div>

            </div>
          </li>`
        });

        $("#showList").html(showData);

    }).catch(err=>{
        console.log("something went wrong in tv show loading", err)
    })



    // load song form database
    axios.get(`http://localhost:3000/songs`).then((response)=>{

        var songsData = '';

        response.data.forEach(element => {
            songsData += `<li>
            <div class="movie-card">

              <a href="movie-details.html">
                <figure class="card-banner">
                  <img src="${element.image}" alt="The Northman movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a href="movie-details.html">
                  <h3 class="card-title">${element.title}</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">HD</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT137M">137 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>8.5</data>
                </div>
              </div>

              <div class="row mt-4">
                  <div class="col-lg-12">
                    <button class="btn favBtn">Add to favorite</button>
                  </div>
                </div>

            </div>
          </li>`
        });

        $("#songList").html(songsData);

    }).catch(err=>{
        console.log("something went wrong in song loading", err)
    })
}

loadContent();
