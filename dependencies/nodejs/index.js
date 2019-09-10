var S3 = require('aws-sdk/clients/s3');
const S3_BUCKET = process.env.S3_BUCKET;

const awsS3Config = 
{
	region :process.env.S3_REGION
};

const s3 = new S3(awsS3Config);
