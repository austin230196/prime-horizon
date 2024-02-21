const App = () => {
  return (
    <AppWrapper>
      <Nav />
      <AppBody>

        <Home>
          <h1>Using Real Estate to show appreciation to the world.</h1>
          <p>Embark on Your Real Estate Journey and Explore a Wealth of Tailored Opportunities Await You</p>
          <Button>Explore our properties</Button>
          <img src="https://assets-global.website-files.com/65b35606fa3a4ac795d3b484/65c220572d81572885925e11_MacBook%20Pro%2014_%20-%207.jpg" alt="Image" />
        </Home>

        <WhyChooseUs>
          <h3>Why Choose Us</h3>
          <ChooseUs>
            {
              whyChooseUs.map(({icon, title, content}, i) => (
                <ChooseUsCard key={i}>
                  <span>
                    <img src={icon} alt="Icon" />
                  </span>
                  <h5>{title}</h5>
                  <p>{content}</p>
                </ChooseUsCard>
              ))
            }
          </ChooseUs>
        </WhyChooseUs>

        <ExploreProperties>
          <h3>Explore Our Featured Properties</h3>
          <Properties>
            {
              properties.map(({image, name, location, bedrooms, bathrooms, area, price}, i) => (
                <Property key={i}>
                  <img src={image} alt="Image" />
                  <section>
                    <h4>{name}</h4>
                    <p><CiLocationOn />{location}</p>
                    <aside>
                      <span>
                        <IoBedOutline />
                        {bedrooms} bedrooms
                      </span>
                      <span>
                        <PiBathtubLight />
                        {bathrooms} bathrooms
                      </span>
                    </aside>
                    <p><BsArrowsFullscreen /> {area} sqft</p>
                    <footer>
                      <b>N{new Intl.NumberFormat('en-us', {}).format(price)}</b>
                      <a href="#">Read more  <SlArrowRight /></a>
                    </footer>
                  </section>
                </Property>
              ))
            }
          </Properties>
        </ExploreProperties>

        <RealEstateServices>
          <h3>Comprehensive real estate services</h3>
          {
            services.map(({color, title, content, image, link}, i) => (
              <Service key={i}>
                <img style={{order: (i + 1) % 2 === 0 ? 1 : -1 }} src={image} alt="Image" />
                <main>
                  <h5 style={{color}}>{title}</h5>
                  <p>{content}</p>
                  <a href="#">{link}</a>
                </main>
              </Service>
            ))
          }
        </RealEstateServices>

        <OurClientSays>
          <h3>What our client says</h3>
          <Testimonials>
            {
              testimonials.map(({image, content, client}, i) => (
                <Testimonial key={i}>
                  <img src={image} alt="Image" />
                  <p>{content}</p>
                  <b>-{client}</b>
                </Testimonial>
              ))
            }
          </Testimonials>
          <button>Read more testimonial</button>
        </OurClientSays>

        <Blog>
          <h3>Stay informed on out latest articles</h3>
          <Articles>
            {
              articles.map(({title, image, content}, i) => (
                <Article key={i}>
                  <img src={image} alt="Image" />
                  <h4>{title}</h4>
                  <p>{content}</p>
                  <a href="#">Read more <SlArrowRight /></a>
                </Article>
              ))
            }
          </Articles>
        </Blog>

        <Contact>
          <div>
            <h3>Get In Touch</h3>
            <p>Leave your email address to contact us, No spam messages</p>
            <input type="email" placeholder="Enter your email address" />
            <button>Contact Us</button>
          </div>
        </Contact>
      </AppBody>

      <FooterContainer>
        <Footer>
          <FooterLeft>
            <Logo />
            <h4>Subscribe to our newsletter</h4>
            <p>Get tips, estate guides, and best practices. Twice a month. Right in your inbox</p>
          </FooterLeft>
          <FooterRight>
            {
              footerResources.map(({header, children}, i) => (
                <FooterResource key={i}>
                  <h4>{header}</h4>
                  {
                    children.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))
                  }
                </FooterResource>
              ))
            }
          </FooterRight>
        </Footer>
      </FooterContainer>
      
    </AppWrapper>
  )
}



import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";
import { BsArrowsFullscreen } from "react-icons/bs";

import Nav from "./components/Nav";
import { whyChooseUs, properties, services, testimonials, articles, footerResources } from "./data";
import Logo from "./components/Logo";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.primary.main};
`;

const AppBody = styled.div`
  padding-top: 100px;
  max-width: 1600px;
  margin: 0 auto;
`;

const WhyChooseUs = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h3 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${props => props.theme.secondary.main}; 
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primary.dark};
`;

const Footer = styled.div`
  padding: 50px;
  display: flex;
  align-items: flex-start;
  gap: 50px;
  margin-top: 50px;
`;

const FooterLeft = styled.div`
  color: ${props => props.theme.secondary.main}; 
  width: min(40%, 550px);

  > h4 {
    margin-top: 20px;
    font-weight: 800;
    font-size: 1.15rem;
  }

  > p {
    margin-top: 10px;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const FooterRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex:1;
`;

const FooterResource = styled.div`
  color: ${props => props.theme.secondary.main}; 
  list-style-type: none;
  width: 100%;

  > h4 {
    font-weight: 800;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  > li {
    line-height: 2;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const Blog = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  > h3 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
    color: ${props => props.theme.secondary.main}; 
  }
`;

const Contact = styled(Blog)`
  margin-top: 50px;
  > div {
    background-color: ${props => props.theme.secondary.main}; 
    width: min(100% - 0.5rem, 1200px);
    margin-inline: auto;
    color: ${props => props.theme.primary.main};
    padding: 40px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h3 {
      font-size: 1.7rem;
      font-weight: 800;
    }

    > p {
      font-weight: 500;
      font-size: 1.2rem;
      color: ${props => props.theme.grey.main};
      margin-bottom: 25px;
    }

    > input {
      line-height: 2;
      padding: 8px;
      width: min(100%, 500px);
      border: 1px solid ${props => props.theme.border.dark};
      background-color: ${props => props.theme.secondary.light};
      border-radius: 8px;
      outline: none;
      font-weight: 500;
      font-size: 1rem;
      margin-bottom: 25px;
    }

    > button {
      border: none;
      background-color: ${props => props.theme.primary.main};
      color: ${props => props.theme.secondary.main};
      padding: 12px 50px;
      font-weight: 800;
      outline: none;
      border-radius: 8px;
      margin-bottom: 40px;
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
`;


const Articles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-block: 20px;
`;

const Article = styled.div`
  width: 100%;
  color: ${props => props.theme.secondary.main};

  > img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  > h4 {
    font-weight: 800;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  > p {
    font-weight: 500;
    font-size: 1.15rem;
    margin-bottom: 30px;
  }

  > a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.info.main};
    font-weight: 700;
    font-size: 1.1rem;
    

    > svg {
      font-size: 1.1rem;
      margin-left: 10px;
    }
  }
`;

const Property = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 16px;
  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: 0px 2px 4px #ccc;
    scale: 1.1;
  }

  > img {
    width: 100%;
    height: 290px;
  }

  >section {
    color: ${props => props.theme.secondary.main};
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > h4 {
      font-weight: 800;
      font-size: 1.1rem;
    }

    > p {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }

    > aside {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-block: 10px;
      font-weight: 500;

      > span {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    > footer {
      border-top: 1px solid ${props => props.theme.primary.dark};
      padding: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > b {
        font-size: 1.5rem;
        font-weight: 800;
      }

      > a {
        display: flex;
        align-items: center;
        color: ${props => props.theme.info.main};
        font-weight: 700;

        > svg {
          font-size: 1rem;
          margin-left: 10px;
        }
      }
    }
  }

`;

const Service = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-block: 25px;

  > img {
    width: 100%;
  }

  > main {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;

    > h5 {
      font-weight: 800;
      font-size: 1.3rem;
      margin-bottom: 15px;
    }

    > p {
      color: ${props => props.theme.secondary.main};
      font-size: 1.1rem;
      margin-bottom: 25px;
    }

    > a {
      color: ${props => props.theme.secondary.main};
      font-weight: 800;
      font-size: 1.15rem;
      text-decoration: underline;
    }

  }
`;

const ExploreProperties = styled(WhyChooseUs)`
  width: 90%;
  margin-top: 30px;
`;

const RealEstateServices = styled(ExploreProperties)`
  width: 90%;
`;

const OurClientSays = styled(ExploreProperties)`
  width: 90%;
  margin-top: 40px;

  > button {
    border: 2px solid ${props => props.theme.secondary.main};
    color: ${props => props.theme.secondary.main};
    background-color: ${props => props.theme.primary.main};
    padding: 16px 20px;
    font-weight: 800;
    outline: none;
    border-radius: 8px;
    margin-bottom: 40px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.5s ease-out;

    &:hover {
      scale: 1.05;
    }
  }
`;

const Properties = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 30px;
  width: 100%;
`;

const Testimonials = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 30px;
  align-items: stretch;
`;

const Testimonial = styled.div`
  width: 100%;
  color: ${props => props.theme.secondary.main};
  background-color: ${props => props.theme.primary.dark};
  padding: 30px 15px;
  border-radius: 8px;
  box-shadow:0 1px 6px rgba(132, 123, 123, .2);
  transition: all 0.5s ease-out;

  &:hover {
    color: ${props => props.theme.primary.main};
    background-color: ${props => props.theme.secondary.main};
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > p {
    font-size: 1.1rem;
    font-weight: 500;
    margin-block: 20px;
  }

  >b {
    font-weight: 800;
  }
`;

const ChooseUs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const ChooseUsCard = styled.div`
  border: 1px solid ${props => props.theme.border.main};
  background-color: ${props => props.theme.primary.dark};
  padding: 15px;
  border-radius: 8px;
  transition: all 0.5s ease-out;
  color: ${props => props.theme.secondary.main}; 

  > h5 {
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  > p {
    font-size: 1.1rem;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.primary.main};
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;

    > img {
      object-fit: fit;
      width: 30px;
      height: 30px;
    }
  }

  &:hover {
    background-color: ${props => props.theme.secondary.main};
    color: ${props => props.theme.primary.main}; 

    > span {
      // background-color: ${props => props.theme.primary.main};
    }
  }
`;

const Home = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;

  > h1 {
    color: ${props => props.theme.secondary.main};
    font-size: 4rem;
    font-weight: 800;
    // width: 90%;
    text-align: center;
  }

  > p {
    color: ${props => props.theme.secondary.main};
    text-align: center;
    font-size: 1.15rem;
    margin-top: 10px;
  }

  > img {
    width: 100%;
    margin-block: 30px;
    object-fit: contain;
  }
`;


const Button = styled.button`
  background-color: ${props => props.theme.secondary.main};
  color: ${props => props.theme.primary.main};
  transition: all 0.5s ease-out;
  border: none;
  font-weight: 600;
  padding: 16px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  margin-left: 20px;
  cursor: pointer;
  margin-top: 60px;


  &:hover {
    background-color: ${props => props.theme.info.main};
    scale: 1.1;
  }
`;


export default App;