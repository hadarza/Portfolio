# Portfolio 

This project is a portfolio website built using React, Sass, and Sanity as the server. It showcases the creator's work and provides information about their skills and experience.

## Features

- Responsive design for optimal viewing on different devices.
- Interactive navigation menu for easy navigation through different sections of the portfolio.
- Project gallery to showcase the creator's work with descriptions and images.
- About section to provide information about the creator, their skills, and experience.
- Contact section with a form to allow visitors to get in touch with the creator.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Sass: A CSS preprocessor that adds powerful features to CSS and makes styling more efficient.
- Sanity: A headless CMS (Content Management System) that provides a backend for storing and managing content.

## Installation

1. Clone the repository: `git clone https://github.com/username/project.git`
2. Navigate to the project directory: `cd project`
3. Install dependencies: `npm install`
4. Configure Sanity:
   - Create a Sanity account at [https://www.sanity.io](https://www.sanity.io) if you haven't already.
   - Set up a new Sanity project and obtain the project ID.
   - Configure your Sanity schema and create necessary content types.
   - Obtain the API token for your Sanity project.
5. Configure environment variables:
   - Create a `.env` file in the project root directory.
   - Add the following variables to the `.env` file:
     ```
     REACT_APP_SANITY_PROJECT_ID=your-sanity-project-id
     REACT_APP_SANITY_DATASET=production
     REACT_APP_SANITY_API_TOKEN=your-sanity-api-token
     ```
   - Replace `your-sanity-project-id` and `your-sanity-api-token` with your actual Sanity project ID and API token.
6. Start the development server: `npm start`

The portfolio website should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Explore the different sections of the portfolio website using the navigation menu.
- View the projects in the gallery and click on them for more details.
- Learn about the creator's skills and experience in the about section.
- Fill out the contact form to get in touch with the creator.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

