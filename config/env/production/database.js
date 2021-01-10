module.exports = ({ env }) => ({
  connections: {
    default: {
      settings: {
        uri:
          "mongodb+srv://wenwettel:Quijano_23@basejgcosmiatra.lpm3v.mongodb.net/strapi?retryWrites=true&w=majority"
      },
      options: {
        ssl: true
      }
    }
  }
});
