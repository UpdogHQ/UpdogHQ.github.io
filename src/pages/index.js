import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/mockup.png';
import demo2 from '../assets/images/mockup2.png';
import dog1 from '../assets/images/Dog Bubble.png';
import dog2 from '../assets/images/Dog Bubble 2.png';
import dog3 from '../assets/images/Dog Bubble 3.png';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Welcome to Updog City!
              </h1>
              <p>
                What’s Updog? It’s a city. Full of dogs. You high five them.<br/>
                Explore the ruff streets of Updog city, befriending whacky gangs of dogs by figuring out their secret combo of high-five handshakes and proving your cool.<br/>
                Big dogs, small dogs, spooky dogs, farmer dogs, we’ve got all kinds of dogs here in Updog City, and all of them are kind! Come high five them.<br/><br/>
                Sign up for beta access and help us build the city!
              </p><br />
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                  Start Now for Free!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Discover what all the buzz is about!
            </h2>
            <p>
              Our game is available on android! Download now to get
              started!
            </p>
            <br />
            <div className="badges">
              <a className="badge-link" href="https://play.google.com/store/apps/details?id=com.updoghq.updog">
                <img src={gplay} alt="" />
              </a>
              {/*<a className="badge-link" href="/#">*/}
              {/*  <img src={astore} alt="" />*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Legit Reviews</h2>
          <p className="text-muted">
            Check out what the Updog City crew said about us!
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo2} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    {/*<h3>Device Mockups</h3>*/}
                    <img src={dog1} className="bubble" alt="" />
                    <p className="text-muted">
                      "Best heckin' game I ever played in my life!"
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    {/*<h3>Flexible Use</h3>*/}
                    <img src={dog2} className="bubble"  alt="" />
                    <p className="text-muted">
                      "I give this game stars."
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    {/*<h3>Free to Use</h3>*/}
                    <img src={dog3} className="bubble" alt="" />
                    <p className="text-muted">
                      "These shapes express my feelings."
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>These reviews are fake :(</h3>
                    <p className="text-muted">
                      So how about you play our game and give us some real ones?!
                    </p>
                    <Scroll type="id" element="download">
                      <a href="#download" className="btn btn-outline-light btn-xl">
                        It's awesome!
                      </a>
                    </Scroll>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart"></i>
          new friends!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
