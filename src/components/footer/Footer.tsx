import React from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Facebook, Twitter, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const socialMediaLinks = [
    { icon: <Twitter />, href: "https://twitter.com/AakashK58906666" },
    { icon: <LinkedIn />, href: "https://www.linkedin.com/in/akash-kumar-73b9211b3/" },
    { icon: <GitHub />, href: "https://github.com/Aakash-Kashyap24" },
  ];

  return (
    <footer style={{ backgroundColor: "#f0f0f0", padding: "20px 0" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" className="font-bold" color="textPrimary">
              Aksh Company
            </Typography>
            <Typography variant="body2" color="textSecondary">
              This is an Full Stack E-commerce Website clone.with all Functionality and Admin Dashboard
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              Links
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="/" color="inherit" underline="none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" color="inherit" underline="none">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" color="inherit" underline="none">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" underline="none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              Connect With Us
            </Typography>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: "5px" }}>
              Fake Address, City, Country
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: "5px" }}>
              Email: aakshdev24@gmail.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Contact: 6201123049
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginTop: "20px" }}
        >
          © {new Date().getFullYear()} Aksh Company. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
