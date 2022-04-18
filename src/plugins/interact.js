import interact from 'interactjs'
import { noteService } from '@/services/noteService'

export const initInteract = (data) => {
  interact(data.element).draggable({
    inertia: true,
    restrict: {
      restriction: 'parent',
    },
    autoScroll: true,
    onmove: (event) => {
      const target = event.target,
        x =
          (parseFloat(target.getAttribute('data-x')) || data.screenX.value) +
          event.dx,
        y =
          (parseFloat(target.getAttribute('data-y')) || data.screenY.value) +
          event.dy

      target.style.webkitTransform =
        target.style.transform = `translate(${x}px, ${y}px)`
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    },
    onend: (event) => {
      const target = event.target

      data.screenX.value = target.getBoundingClientRect().left
      data.screenY.value = target.getBoundingClientRect().top
      data.note.top = data.screenY.value
      data.note.left = data.screenX.value

      noteService.update(data.note)
    },
  })
}
