/*
for JavaScript does not support 64-bit integer for bit-operation,
so use C++ instead.
*/
class Solution {
public:
    int divide(int dividend, int divisor) {
        if (!divisor || (dividend == INT_MIN && divisor == -1)) return INT_MAX;

        int result = 0;
        int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
        long long dvd = labs(dividend);
        long long dvs = labs(divisor);

        while (dvd >= dvs) {
            long long temp = dvs;
            long long multiply = 1;
            while (dvd >= temp << 1) {
                temp <<= 1;
                multiply <<= 1;
            }
            dvd -= temp;
            result += multiply;
        }

        return sign == 1 ? result : -result;
    }
};