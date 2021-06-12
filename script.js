var app = new Vue({
  el: '#app',
  data: {
    currentStep: null,
    steps: [
      {"label": "one"},
      {"label": "two"},
      {"label": "three"},
      {"label": "complete"}
    ]
  },
  methods: {
    nextStep(next=true) {
      const steps = this.steps
      const currentStep = this.currentStep
      const currentIndex = steps.indexOf(currentStep)
      
      // handle back
      if (!next) {
        if (currentStep && currentStep.label === 'complete') {
          return this.currentStep = steps[steps.length - 1]           
        }

        if (steps[currentIndex - 1]) {
          return this.currentStep = steps[currentIndex - 1] 
        }

        return this.currentStep = { "label": "start" }   
      }
      
      // handle next
      if (this.currentStep && this.currentStep.label === 'complete') {
        return this.currentStep = { "label": "start" }
      }
      
      if (steps[currentIndex + 1]) {
        return this.currentStep = steps[currentIndex + 1]
      }

      this.currentStep = { "label": "complete" }   
    },
    stepClasses(index) {
      let result = `progress__step progress__step--${index + 1} `
      if (this.currentStep && this.currentStep.label === 'complete' ||
          index < this.steps.indexOf(this.currentStep)) {
        return result += 'progress__step--complete'
      }
      if (index === this.steps.indexOf(this.currentStep)) {
        return result += 'progress__step--active'
      }
      return result
    }
  },
  computed: {
     progressClasses() {
      let result = 'progress '
      if (this.currentStep && this.currentStep.label === 'complete') {
        return result += 'progress--complete'
      }
      return result += `progress--${this.steps.indexOf(this.currentStep) + 1}`
    }
  }
})