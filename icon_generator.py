import cv2
import numpy as np
size = 19
img = np.zeros((size, size, 3), np.uint8)
cv2.putText(img, 'C', (0, size - 1), cv2.FONT_HERSHEY_SIMPLEX, .7, (230, 0, 0), 3)
cv2.imshow('', img)
cv2.waitKey(8000)
cv2.imwrite('c19.png', img)