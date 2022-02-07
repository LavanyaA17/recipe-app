import React from "react";
import Footer from '../components/footer';
import Icon from "../components/icons";

export function FooterContainer()
{
    return (
        <Footer>
          <Footer.Wrapper>
              <Footer.Row>
              <Footer.Column>
                  <Footer.Title>About us</Footer.Title>
                  <Footer.Link href=" ">Story</Footer.Link>
                  <Footer.Link href=" ">Clients </Footer.Link>
                  <Footer.Link href=" ">Testomonials </Footer.Link>
                  <Footer.Link href=" ">Contact us</Footer.Link>  
              </Footer.Column>
              <Footer.Column>
                  <Footer.Title>Our Recipes</Footer.Title>
                  <Footer.Link href=" ">Suggestions</Footer.Link>
                  <Footer.Link href=" ">Orders </Footer.Link>
                  <Footer.Link href=" ">Reviews </Footer.Link> 
              </Footer.Column>
              <Footer.Column>
                  <Footer.Title>Countries</Footer.Title>
                  <Footer.Link href=" ">India</Footer.Link>
                  <Footer.Link href=" ">Germany </Footer.Link>
                  <Footer.Link href=" ">USA </Footer.Link>
                  <Footer.Link href=" ">Australia</Footer.Link>  
              </Footer.Column>
              <Footer.Column>
                  <Footer.Title>Social Media</Footer.Title>
                  <Footer.Link href=" "><Icon className="fab fa-facebook-f"/>Facebook</Footer.Link>
                  <Footer.Link href=" "><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                  <Footer.Link href=" "><Icon className="fab fa-youtube"/>Youtube </Footer.Link>
                  <Footer.Link href=" "><Icon className="fab fa-twitter"/>Twitter</Footer.Link>  
              </Footer.Column>
              </Footer.Row>

          </Footer.Wrapper>
        </Footer>
    )
}
