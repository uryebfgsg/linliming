import InformationJaneComponent from './InformationJane.vue'
import InformationWritingComponent from './InformationWriting.vue'
import InformationWalletComponent from './InformationWallet.vue'
import InformationSubmissionComponent from './InformationSubmission.vue'




const informationList = {
	install:function(Vue){
		Vue.component('informationJane',InformationJaneComponent)
		Vue.component('informationWriting',InformationWritingComponent)
		Vue.component('informationWallet',InformationWalletComponent)
		Vue.component('informationSubmission',InformationSubmissionComponent)
	}
}
export default informationList
