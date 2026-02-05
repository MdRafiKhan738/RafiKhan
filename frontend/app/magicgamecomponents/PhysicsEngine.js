import Matter from 'matter-js'

export const createPhysicsWorld = (width, height) => {
  const engine = Matter.Engine.create()
  const world = engine.world
  
  // Increase gravity slightly for better "fall" feel
  engine.gravity.y = 1.2 

  const walls = [
    Matter.Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true }), // Floor
    Matter.Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true }),       // Left Wall
    Matter.Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true }),// Right Wall
  ]

  Matter.World.add(world, walls)

  return { engine, world }
}

export const createBlobBody = (x, y, radius, skillData) => {
  const body = Matter.Bodies.circle(x, y, radius, {
    restitution: 0.9, // Bounciness
    friction: 0.005,
    frictionAir: 0.02, // Adds some drag so they don't fly off too crazy
    render: { visible: false } // We render with React, not Canvas
  })
  
  // Attach the skill data directly to the physics body so we can track it
  body.skill = skillData
  return body
}