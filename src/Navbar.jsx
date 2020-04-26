import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
        <react.fragment>
            <nav>
                <ul>
                <li>
                    <a data-widget="pushmenu" href="#"><i /></a>
                </li>
                <li>
                    <a href="index3.html">خانه</a>
                </li>
                <li>
                    <a href="#">تماس</a>
                </li>
                </ul>
                <form>
                <div>
                    <input type="search" placeholder="جستجو" aria-label="Search" />
                    <div>
                    <button type="submit">
                        <i />
                    </button>
                    </div>
                </div>
                </form>
                ...
            </nav>
        </react.fragment>

    );
  }
}

export default NavBar;