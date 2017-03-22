/*
 Custom Shapes Contained Here
*/

function Anvil(){
    return Shape.extrude(new Path([    
                      Point(-i+0.3, -z,   1),
                      Point(-i+0.3, -z+0.6, 1),

                      Point(-i+0.5, -z+0.55, 1.15),
                      Point(-i+0.3, -z+0.65, 1.5),
                      
                      Point(-i+0.3, -z+0.6, 1.6),
                      Point(-i+0.3, -z,   1.6),
                      
                      Point(-i+0.3, -z+0.15,   1.4),
                      Point(-i+0.3, -z+0.15,   1.15),
                      // Point(-i+0.5, -z+0.85, 1.3),
                    ]), 0.3, 'x');
}