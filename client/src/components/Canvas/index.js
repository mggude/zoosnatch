import React, { Component } from 'react';

class Canvas extends React.Component {
    render() {
        return(
          <div>
            <canvas ref="canvas" width={640} height={425} />
          </div>
        )
      }
    }
    export default Canvas