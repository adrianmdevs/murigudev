import {ref, watch} from "vue"

const isDark = ref(false)

//Initialize with system preference
if(window.matchMedia("prefers-colors-scheme: dark").matches){
    isDark.value = true
    document.documentElement.classList.add("dark")
}

watch(isDark, val =>{
    val ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
})

export function useDark(){
    function toggleDark() {
        isDark.value = !isDark.value
    }
    return{isDark, toggleDark}
}