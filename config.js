const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      port: "3306",
      user: "root",
      password: "root",
      database: "localhost",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  
export default config;