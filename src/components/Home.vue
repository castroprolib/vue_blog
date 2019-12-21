<template>
	<div class="home">


		<header class="site-header">
			<div class="container">
				<div class="row align-items-center">
					<div class="col">
						<h1 class="align-middle text-center text-lg-center">Bienvenido!</h1>
						<p class="display-4 text-center text-lg-center home-text">Aprende sobre desarrollo web, y temáticas en animes, videojuegos.</p>
					</div>
				</div>
			</div>
		</header>

		<h2 class="lecture-title">Diviertete</h2>

		<!-- <main class="container"> -->
			<div class="container">	
				<div class="row">

					<div class="col-12">
						<div id="slider" class="carousel slide" data-ride="carousel">

							<ol class="carousel-indicators">
								<li data-target="#slider" data-slide-to="0" class="active"></li>
								<li data-target="#slider" data-slide-to="1"></li>
								<li data-target="#slider" data-slide-to="2"></li>				
							</ol>


							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block img-fluid" src="public/img/1.jpg">
									<div class="carousel-caption d-none d-md-block">
										<h3 class="home-text">Desarrollo web</h3>
										<!-- <a href="#" class="btn btn-primary">Read More</a> -->
									</div>
								</div>
								<div class="carousel-item">
									<img class="d-block img-fluid" src="assets/img/2.jpg">
									<div class="carousel-caption d-none d-md-block">
										<h3 class="home-text">Animes</h3>
									</div>
								</div>
								<div class="carousel-item">
									<img class="d-block img-fluid" src="assets/img/3.jpg">
									<div class="carousel-caption d-none d-md-block">
										<h3 class="home-text">Videojuegos</h3>
									</div>
								</div>				
							</div> <!--.carousel-inner-->

							<a class="carousel-control-prev" href="#slider" role="button" data-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#slider" role="button" data-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div> <!-- end col -->

				</div> <!-- end row -->

			</div> <!-- end container -->
			<!-- </main> -->

			<br>
			<div class="container">
				<div class="row">

					<div class="col-6">

						<h2 class="home-text">Si el contenido que agrego en el sitio te es de utilidad, puedes brindarme un cáfe y me animaras a continuar con el desarrollo de nuevos proyectos. </h2>

					</div>

					<div class="col-6">

						<a href="https://paypal.me/programadorjonathan?locale.x=es_XC" class="btn btn-primary btn-block home-text" alt="donacionPaypal"><span class="fab fa-paypal texto-blog-link"></span>Brindame un café</a>

						<a href="https://uphold.com/" target="_blank" class="btn btn-danger btn-block home-text" alt="donacionBitcoin"><span class="fab fa-bitcoin texto-blog-link"></span>wallet</a>
						<br>
						<p class="text-center home-donation">16FJhtxHw7Nd5icQzMZxJW82TSDTBFadVc</p>




					</div>

				</div>

			</div>

		</div>
	</template>

	<script>
		export default {
			name: 'Home',
			data(){
				return{
					nombre: 'nombre'
				}
			}



		}
	</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>

</style>
