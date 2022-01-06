# NANO Marketplace

## Available Scripts

### `yarn install`

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `Docker build`

run `docker-compose up -d --build`  
Note: please verify docker up and running.

## Environment Variable

### REACT_APP_BACKEND_URL

Link of the deployed backend.

### REACT_APP_NANO_ACCESS_CONTROL_ADDRESS

Link of the nano access control contract.

### REACT_APP_MARKETPLACE_ADDRESS

Link of the maketplace contract.

### REACT_APP_ETH_NETWORK_CHAIN_ID

Network chain ID

### PORT

Specify port, on which you want to run the admin app,
Note: You need to update mapping of ports in docker-compose.yml file accordingly!.
