import React from "react";

// core components
import TopNavbar from "components/Navbars/TopNavbar.jsx";

// index page sections
import Top from "./IndexSections/Top.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <TopNavbar />
        <main ref="main">
          <Top />
          {/* <section className="section">
            <Container>
              <Menus />
            </Container>
          </section>
          <section className="section section-components">
            <Container>              
              <Tabs />  
            </Container>
          </section> */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
