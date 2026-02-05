import { useEffect } from 'react'

const useMagnetCursor = (bodies) => {
  useEffect(() => {
    const handleMove = (e) => {
      // Guard clause: if bodies is undefined or empty, do nothing
      if (!bodies || bodies.length === 0) return

      bodies.forEach(body => {
        // Only affect non-static bodies (the balls, not the walls)
        if (body.isStatic) return

        const dx = e.clientX - body.position.x
        const dy = e.clientY - body.position.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Only apply force if cursor is close (magnet effect)
        if (distance < 200) {
          const forceMagnitude = 0.00005 // Adjust for strength
          Matter.Body.applyForce(body, body.position, {
            x: dx * forceMagnitude,
            y: dy * forceMagnitude
          })
        }
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [bodies])
}

export default useMagnetCursor