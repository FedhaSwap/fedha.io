pm2 kill
pm2 start /home/PrecisionPay/precisionpay_apps/app.precisionpay.co.ke/app.js --name='app.precisionpay.co.ke'
pm2 start /home/PrecisionPay/precisionpay_apps/cronjobs/index.js --name='cronjobs_precisionpay'
pm2 start /home/RevenueStadia/apps/api/index.js --name='api_revenuestadia'
pm2 start /home/RevenueStadia/apps/app/index.js --name='app_revenuestadia'
pm2 start /home/RevenueStadia/apps/estate/index.js --name='estate_revenuestadia'
pm2 start /home/RevenueStadia/apps/payments/index.js --name='payments_revenuestadia'
pm2 start /home/RevenueStadia/apps/ussd/index.js --name='ussd_revenuestadia'
pm2 start /home/RevenueStadia/crons/cronjobs_pm/index.js --name='cronjobs_pm'
pm2 start /home/RevenueStadia/crons/cronjobs_spm/index.js --name='cronjobs_spm'
pm2 start /home/RevenueStadia/crons/cronjobs_swm/index.js --name='cronjobs_swm'
pm2 start /home/RevenueStadia/crons/cronjobs_swm_v2/index.js --name='cronjobs_swm_v2'
pm2 start /home/RevenueStadia/crons/invoicing/index.js --name='invoicing'
pm2 start /home/RevenueStadia/crons/on_off_power/index.js --name='on_off_power'
pm2 save --force