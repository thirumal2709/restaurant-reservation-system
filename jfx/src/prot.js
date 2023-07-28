import * as React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
//import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { red } from '@mui/material/colors';
// import './word.css';
// import './word1.css';
// import './pro.css';
// import Dashboard from './navbar';
// import Footer from './footer';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const Prof=()=>{
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return(
      <div class="clo">
            <div>
             
               <h2 style={{marginLeft: 100,marginTop: 100,justifyContent: "center",fontSize: 40,color: "black",fontWeight: "bolder"}}>Restaurants</h2>
               <br></br>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginLeft: 50}}>
            <div style={{marginLeft: 100, marginBottom: 40}}>
                <img src="/images/red.jpg"></img><br></br><br></br>

                <span style={{marginLeft: 20,color: "black"}}>My Restaurants offer a unique dining experience with culinary expertise, social gathering opportunities, convenience, and a wide variety of menu choices.</span>
            </div>
            <div style={{marginRight: 210,marginTop: 60}}>
                <h3 style={{color: "black"}}>Welcome to our restaurant, where exceptional dining experiences await you</h3>
                <br></br>
                <ul>
                    <li style={{color: "black"}}>Ambiance: Restaurants provide a pleasant and inviting atmosphere that enhances the dining experience.</li>
                    <li style={{color: "black"}}>Professional Service: Restaurants employ well-trained staff who offer attentive and friendly service to ensure customer satisfaction.</li>
                    <li style={{color: "black"}}>Variety of Cuisines: Restaurants offer a diverse range of cuisines, allowing patrons to explore different flavors and culinary traditions.</li>
                    <li style={{color: "black"}}>Socializing and Gathering: Restaurants provide a space for people to socialize, celebrate special occasions, or enjoy quality time with family and friends.</li>
                    <li style={{color: "black"}}>Expertly Crafted Drinks: Many restaurants have skilled bartenders who create unique and delicious cocktails, mocktails, and other beverages.</li>
                    <li style={{color: "black"}}>Support Local Economy: By dining at restaurants, individuals contribute to the local economy and support local businesses and employment opportunities.</li>
                </ul>
            </div>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginTop: 5}}>
            <div style={{marginLeft: 180}}>
                <br></br><br></br>
                <div style={{display: "flex"}}>
                  <div>
                <h5>Qualites of a Restarunt</h5>
                 <ol>
                  <li style={{color: "black"}}>Food Quality: The taste, presentation, and overall quality of the dishes served.</li>
                  <li style={{color: "black"}}>Service: The attentiveness, friendliness, and efficiency of the restaurant staff.</li>
                  <li style={{color: "black"}}>Cleanliness: The cleanliness and hygiene standards maintained throughout the restaurant.</li>
                  <li style={{color: "black"}}>Dietary Options: The availability and quality of options for individuals with specific dietary requirements or preferences.</li>
                  <li style={{color: "black"}}>Reputation: The overall reputation and standing of the restaurant in the local community or among industry professionals.</li>
                  <li style={{color: "black"}}>Online Reviews: Considering the feedback and ratings provided by customers on platforms such as Yelp, TripAdvisor, Google Reviews, or Michelin Guide.</li>
                 </ol>
                 </div>
                 </div>
                 <div>
                 </div>
                <br></br>
            </div>
            </div>
            <div>
                <h2 style={{marginLeft: 160,marginTop: 100,justifyContent: "center",fontSize: 40,color: "black",fontWeight: "bolder"}}>Locations of Restarunts</h2>
                <br></br><br></br>
                <div class="menu__container bd-grid" style={{marginRight: 80}}>
                    <div class="menu__content">
                    <div>
                        <br/>
                        <img src="/images/indian.jpg" alt="" class="menu__img" style={{marginLeft:160}}/><br></br><br></br>
                    </div>
                    <div style={{marginLeft:160}}> 
                        <ol>
                  <li style={{color: "black"}}>Food Quality: The taste, presentation, and overall quality of the dishes served.</li>
                  <li style={{color: "black"}}>Service: The attentiveness, friendliness, and efficiency of the restaurant staff.</li>
                  <li style={{color: "black"}}>Cleanliness: The cleanliness and hygiene standards maintained throughout the restaurant.</li>
                  <li style={{color: "black"}}>Dietary Options: The availability and quality of options for individuals with specific dietary requirements or preferences.</li>
                  <li style={{color: "black"}}>Reputation: The overall reputation and standing of the restaurant in the local community or among industry professionals.</li>
                  <li style={{color: "black"}}>Online Reviews: Considering the feedback and ratings provided by customers on platforms such as Yelp, TripAdvisor, Google Reviews, or Michelin Guide.</li>
                 </ol>
                 </div> 
                    </div>
                    
                  </div>
                <br></br><br></br><br></br>
                  <div style={{marginLeft: 30}}>
                    <Button variant="contained" style={{backgroundColor: "red"}} ><Link to="/Home">Back to home!</Link></Button>
                  </div>
                <br></br><br></br><br></br>
           </div>
            <div>
              
            </div>
        </div>
    );
}


export default Prof;