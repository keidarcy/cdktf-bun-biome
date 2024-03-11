import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';

const app = new App();

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
  }
}
new MyStack(app, 'cdktf-bun-biome');

// class MyStack2 extends TerraformStack {
//   constructor(scope: Construct, id: string) {
//     super(scope, id);

//     // define resources here
//   }
// }
// new MyStack2(app, 'cdktf-bun-biome2');
app.synth();
