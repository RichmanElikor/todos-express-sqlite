FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .  
EXPOSE 300
CMD ["npm", "start"]  