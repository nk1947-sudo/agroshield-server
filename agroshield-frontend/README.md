# AgroShield Frontend

This is a static frontend web application built with React, TypeScript, and Vite.  
No backend/server code is included in this repository.

## Overview
AgroShield Frontend is a React application designed for managing agricultural inspections, seizures, and lab samples. It provides a user-friendly interface for field officers, district agricultural officers, and legal officers to plan inspections, log seizures, and track lab samples.

## Features
- **Dashboard**: View key metrics and performance trends related to inspections and seizures.
- **Inspection Planning**: Create and manage inspection visit plans.
- **Field Execution**: Handle field execution tasks, including device activation and product scanning.
- **User Roles**: Different access levels for various user roles, ensuring secure and efficient operations.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd agroshield-server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
To preview the production build locally:
```
npm run preview
```

The build artifacts will be stored in the `dist` directory.

## Folder Structure
- `src/`: Contains the source code for the application.
- `public/`: Contains static files, including the main HTML template.
- `package.json`: Project configuration and scripts.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration file.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
