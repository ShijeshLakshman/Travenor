// import Toast from 'react-native-toast-message';

// export const showToast = (type: string, message: string) => {
//   Toast.show({
//     type: type ?? 'success',
//     text1: 'EventLedger',
//     text2: message,
//   });
// };

// export const calculateTotals = (eventsList: any, estimation: any) => {
//   let totalEstimate = 0;
//   let totalSpend = 0;

//   eventsList.forEach((section: any) => {
//     section.data.forEach((item: any) => {
//       // totalEstimate += parseFloat(item.estimate);
//       totalSpend += parseFloat(item.spend);
//     });
//   });

//   const variance = Math.abs(Number(estimation) - totalSpend);
//   return {totalEstimate, totalSpend, variance};
// };
