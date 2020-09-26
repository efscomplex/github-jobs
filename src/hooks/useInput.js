import { ref, provide, onBeforeUnmount } from 'vue'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

export default function useInput(callback) {
	const sub = new Subject()

	const input$ = ref(sub.pipe(debounceTime(500)))

	const obs = ref(input$.value.subscribe(callback))

	onBeforeUnmount(() => {
		obs.value.unsubscribe()
	})

	provide('input$', input$.value)
}
