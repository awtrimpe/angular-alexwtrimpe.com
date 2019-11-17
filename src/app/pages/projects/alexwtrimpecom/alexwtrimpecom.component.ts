import { Component } from "@angular/core";

@Component({
  templateUrl: "./alexwtrimpecom.component.html"
})
export class AlexWTrimpeProjectComponent {
  public pyCode = `
  import json
  import os
  import sys
  from api_contents import create_app
  from flask import Flask, request, jsonify
  from flask_cors import CORS
  from gevent.pywsgi import WSGIServer

  app = Flask(__name__)
  CORS(app)


  @app.route('/')
  def hello():
    return 'Hello World!'


  if __name__ == '__main__':
    if sys.platform == 'win32':
      os.environ['DB_CONFIG'] = ''.join(
        open(os.path.dirname(os.path.realpath(__file__))+"/config.json", 'r').readlines())
      app = create_app(json.loads(os.environ['DB_CONFIG']))
      http_server = WSGIServer(
        ('0.0.0.0', int(os.getenv('PORT', '5002'))), app)
    else:
      os.environ['DB_CONFIG'] = ''.join(open('config.json', 'r').readlines())
      app = create_app(json.loads(os.environ['DB_CONFIG']))
      http_server = WSGIServer(('0.0.0.0', int(os.getenv(
        'PORT', '5002'))), app, keyfile='/etc/letsencrypt/live/sitename/privkey.pem', certfile='/etc/letsencrypt/live/sitename/cert.pem')
    print('API started successfully.')
    http_server.serve_forever()
    `;
}
