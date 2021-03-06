function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'White cap',
    description: 'soo nice',
    status: 'AVAILABLE',
    price: 35,
    photo: {
      id: '5dfbed262849d7961377c2c0',
      filename: 'cap.jpg',
      originalFilename: 'cap.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5dfbed262849d7961377c2c0',
        version: 1576791335,
        signature: '9f7d5115788b7677307a39214f9684dd827ea5f9',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 27871,
        type: 'upload',
        etag: 'e1fdf84d5126b6ca2e1c8ef9532be5a5',
        placeholder: false,
        url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167475/swagstore/download_bzbjbw.jpg',
        secure_url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167475/swagstore/download_bzbjbw.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Black hoodie',
    description: 'Great one!',
    status: 'AVAILABLE',
    price: 52,
    photo: {
      id: '5e2a13f0689b2835ae71d1a5',
      filename: '270-camo-sunset.jpg',
      originalFilename: '270-camo-sunset.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a13f0689b2835ae71d1a5',
        version: 1579815920,
        signature: 'a430b2d35f6a03dc562f6f56a474deb6810e393f',
        width: 960,
        height: 640,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 45455,
        type: 'upload',
        etag: 'aebe8e9cc98ee4ad71682f19af85745b',
        placeholder: false,
        url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167612/swagstore/Every-Day-Hoodie-Black-2_15b5d103-22d8-4d7a-b426-06ba021bf0fb_300x450_sftxfh.jpg',
        secure_url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167612/swagstore/Every-Day-Hoodie-Black-2_15b5d103-22d8-4d7a-b426-06ba021bf0fb_300x450_sftxfh.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Stainless Steel Bottle',
    description: 'Love this',
    status: 'AVAILABLE',
    price: 25,
    photo: {
      id: '5e2a13ff689b2835ae71d1a7',
      filename: 'kith-hoodie.jpg',
      originalFilename: 'kith-hoodie.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a13ff689b2835ae71d1a7',
        version: 1579815935,
        signature: '360df116020320a14845cf235b87a4a5cdc23f86',
        width: 2000,
        height: 2000,
        format: 'png',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: 'upload',
        etag: 'b6fbc18b196c68e2b87f51539b849e70',
        placeholder: false,
        url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167572/swagstore/steel-urban-500ml-1_cihr3z.png',
        secure_url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167572/swagstore/steel-urban-500ml-1_cihr3z.png',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Dark Blue Jeans',
    description: 'Super hip. Comes in a number of colours',
    status: 'AVAILABLE',
    price: 35,
    photo: {
      id: '5e2a1413689b2835ae71d1a9',
      filename: 'TNF-fanorak.png',
      originalFilename: 'TNF-fanorak.png',
      mimetype: 'image/png',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a1413689b2835ae71d1a9',
        version: 1579815957,
        signature: 'affd16fa20107a4d5399aab553ea77fff1c4b2ef',
        width: 1276,
        height: 1490,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 2454948,
        type: 'upload',
        etag: 'ce0f36da93c60c5d4406657225206f70',
        placeholder: false,
        url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167457/swagstore/15206610_DarkBlueDenim_003_ProductLarge_r1axhx.jpg',
        secure_url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167457/swagstore/15206610_DarkBlueDenim_003_ProductLarge_r1axhx.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Zolar wine',
    description: '',
    status: 'AVAILABLE',
    price: 30,
    photo: {
      id: '5e2a142c689b2835ae71d1ab',
      filename: 'vapormax.jpg',
      originalFilename: 'vapormax.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a142c689b2835ae71d1ab',
        version: 1579815980,
        signature: '6dd95447407c06ba955164c4961bd4abc2fb9f4d',
        width: 1100,
        height: 735,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 183071,
        type: 'upload',
        etag: '5550566c7fab113ba32d85ed08f54faa',
        placeholder: false,
        url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167535/swagstore/z9cGkiq-RIingLoU6f6DKw_fnndiv.jpg',
        secure_url:
          'https://res.cloudinary.com/dipb583hj/image/upload/v1635167535/swagstore/z9cGkiq-RIingLoU6f6DKw_fnndiv.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
];
