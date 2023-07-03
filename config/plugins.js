/*module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});*/

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("SCALEWAY_ACCESS_KEY_ID"),
        secretAccessKey: env("SCALEWAY_ACCESS_SECRET"),
        region: env("SCALEWAY_ENDPOINT"), // e.g. "s3.fr-par.scw.cloud"
        params: {
          Bucket: env("SCALEWAY_BUCKET"),
        },
      },
    },
  },
  // ...
});
