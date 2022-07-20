# Billiards

My adventures on billiards simulations.

The main goal of this project is to develop a light billiard simmulator on a user-defined environment. Desired features include:

- **Realistic physics:** I'll probably consult [Evan Kiefl's](https://ekiefl.github.io/2020/04/24/pooltool-theory/) research for this part. My intention is to allow the user to select whether or not they want realistic ball-cloth/ball/cushion interaction piecewise.

- **Constant velocity:** No velocity loss due to ball-cloth interaction.

- **User-defined table:** I'm still not sure if I want to allow free-hand designs, I want to allow the user to define the boundaries using equations and the position of the pockets.

- **Stochastic ball-cushion interactions:** Besides the realistic and the "classical" (simmetrical reflection) interactions, I want to allow the ball-cushion interaction to be probabilistic. I still have to learn a lot about the subject, but I'll probably use the [Feres Random Map](https://arxiv.org/pdf/2005.01892.pdf) to do that.

- **Trajectory "drawing":** Draw the ball(s)'s trajectory on the table.

To consider:

- **Non-flat tables:** Should I consider tables that aren't flat? How should can the user custom these irregularities? Should this be probabilistic?

- **Non-leveled tables:** Is this useful?
