import React from 'react';
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Grid,
  Button,
  IconButton,
  Tabs,
  Tab,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
  CardContent,
  CardMedia,
  Badge,
  Stack,
} from '@mui/material';
import {
  Edit,
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';
import '../styles/Profile.css'; // Import the CSS file

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" className="profile-container">
      <Paper elevation={3} className="profile-card">
        <Grid container spacing={4}>
          {/* Profile Picture and Edit Icon */}
          <Grid item xs={12} sm={4} align="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <IconButton className="badge-edit-icon">
                  <Edit />
                </IconButton>
              }
            >
              <Avatar
                alt="User Name"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="profile-avatar"
              />
            </Badge>
          </Grid>

          {/* User Information */}
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" className="profile-name">
              Sophia Hernandez
            </Typography>
            <Typography variant="subtitle1" className="profile-title">
              Full Stack Developer
            </Typography>
            <Typography variant="body1" className="profile-bio">
              Passionate developer with 5+ years of experience in building web
              applications.
            </Typography>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={1} className="social-media-icons">
              <IconButton color="primary">
                <Facebook />
              </IconButton>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
              <IconButton color="primary">
                <LinkedIn />
              </IconButton>
            </Stack>

            {/* Edit Profile Button */}
            <Button
              variant="outlined"
              startIcon={<Edit />}
              className="edit-profile-button"
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider className="profile-divider" />

        {/* Tabs */}
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          className="profile-tabs"
        >
          <Tab label="About" />
          <Tab label="Posts" />
          <Tab label="Friends" />
          <Tab label="Photos" />
        </Tabs>

        {/* Tab Panels */}
        <Box sx={{ mt: 2 }}>
          {value === 0 && (
            <Box>
              {/* Contact Information */}
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <List className="contact-info">
                <ListItem>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText primary="john.doe@example.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText primary="+1 (555) 123-4567" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText primary="San Francisco, CA" />
                </ListItem>
              </List>
            </Box>
          )}

          {value === 1 && (
            <Box>
              {/* Recent Posts */}
              <Typography variant="h6" gutterBottom>
                Recent Posts
              </Typography>
              <Card className="post-card">
                <CardContent>
                  <Typography variant="h5" className="post-title">
                    Post Title
                  </Typography>
                  <Typography variant="body2" className="post-content">
                    This is a sample post content.
                  </Typography>
                </CardContent>
              </Card>
              {/* Add more posts as needed */}
            </Box>
          )}

          {value === 2 && (
            <Box>
              {/* Friends List */}
              <Typography variant="h6" gutterBottom>
                Friends
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6} sm={4}>
                  <Card className="friend-card">
                    <CardContent>
                      <Avatar
                        alt="Friend Name"
                        src="https://via.placeholder.com/100"
                        className="friend-avatar"
                      />
                      <Typography variant="subtitle1" className="friend-name">
                        Jane Smith
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                {/* Add more friends as needed */}
              </Grid>
            </Box>
          )}

          {value === 3 && (
            <Box>
              {/* Photo Gallery */}
              <Typography variant="h6" gutterBottom>
                Photos
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6} sm={4}>
                  <Card className="photo-card">
                    <CardMedia
                      component="img"
                      image="https://via.placeholder.com/200"
                      alt="Sample Photo"
                      className="photo-media"
                    />
                  </Card>
                </Grid>
                {/* Add more photos as needed */}
              </Grid>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
