def detect_text_uri(uri):
    """Detects text in the file located in Google Cloud Storage or on the Web.
    """
    from google.cloud import vision
    client = vision.ImageAnnotatorClient()
    image = vision.types.Image()
    image.source.image_uri = uri

    response = client.text_detection(image=image)
    texts = response.text    
    print(texts)

    ##for text in texts:
        
        ##print('\n"{}"'.format(text.description))

        ##vertices = (['({},{})'.format(vertex.x, vertex.y)
        ##            for vertex in text.bounding_poly.vertices])

        ##print('bounds: {}'.format(','.join(vertices)))

    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))




detect_text_uri("https://i.redd.it/ryzpb7u9zaz31.jpg")
