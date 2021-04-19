import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
          <div>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
              crossorigin="anonymous"
            ></link>
            <nav class="navbar navbar-light  ">
              <div class="container-fluid">
                <div class="navbar-header d-flex align-items-center">
                  <h2 class="banner" class="navbar-brand h1">
                    Twitch Pictionary
                  </h2>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}
